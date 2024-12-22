<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Loading state -->
    <div v-if="loading" class="flex-1 flex items-center justify-center">
      <div class="flex flex-col items-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        <p class="mt-4 text-gray-600">Loading chat...</p>
      </div>
    </div>

    <template v-else>
      <!-- Sidebar with conversations -->
      <div class="w-80 bg-white border-r border-gray-200">
        <div class="h-full flex flex-col">
          <!-- Header -->
          <div class="p-4 border-b border-gray-200">
            <h2 class="text-lg font-semibold text-gray-900">Messages</h2>
          </div>

          <!-- Conversations list -->
          <div class="flex-1 overflow-y-auto">
            <div v-for="chat in chats" :key="chat.id" @click="selectChat(chat)"
                 class="p-4 hover:bg-gray-50 cursor-pointer"
                 :class="{'bg-indigo-50': selectedChat?.id === chat.id}">
              <div class="flex justify-between items-start">
                <div class="flex items-center">
                  <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span class="text-gray-600 font-medium">
                      {{ chat.otherUser.displayName?.[0]?.toUpperCase() || '?' }}
                    </span>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                      {{ chat.otherUser.displayName }}
                    </p>
                    <p class="text-sm text-gray-500 truncate">
                      {{ chat.lastMessage?.text || 'No messages yet' }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- New chat button -->
          <div class="p-4 border-t border-gray-200">
            <button @click="showNewChatModal = true"
                    class="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              New Chat
            </button>
          </div>
        </div>
      </div>

      <!-- Chat area -->
      <div class="flex-1 flex flex-col">
        <template v-if="selectedChat">
          <!-- Chat header -->
          <div class="p-4 border-b border-gray-200 bg-white">
            <div class="flex items-center">
<!--              <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span class="text-gray-600 font-medium">
                  {{ selectedChat.otherUser.displayName?.[0]?.toUpperCase() || '?' }}
                </span>
              </div>
              <h3 class="ml-3 text-lg font-medium text-gray-900">
                {{ selectedChat.otherUser.displayName }}
              </h3>-->
            </div>
          </div>

          <!-- Messages -->
          <div class="flex-1 overflow-y-auto p-4 space-y-4" ref="messagesContainer">
            <div v-for="message in messages" :key="message.id"
                 class="flex"
                 :class="{'justify-end': message.senderId === currentUser?.uid}">
              <div class="max-w-[70%] rounded-lg px-4 py-2"
                   :class="message.senderId === currentUser?.uid ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-900'">
                <p class="text-sm">{{ message.text }}</p>
                <p class="text-xs mt-1 opacity-70">
                  {{ formatTime(message.timestamp) }}
                </p>
              </div>
            </div>
          </div>

          <!-- Message input -->
          <div class="p-4 border-t border-gray-200 bg-white">
            <form @submit.prevent="sendMessage" class="flex space-x-4">
              <input
                  v-model="newMessage"
                  type="text"
                  placeholder="Type your message..."
                  class="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <button
                  type="submit"
                  class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Send
              </button>
            </form>
          </div>
        </template>

        <!-- No chat selected state -->
        <div v-else class="flex-1 flex items-center justify-center bg-gray-50">
          <p class="text-gray-500 text-lg">Select a chat or start a new conversation</p>
        </div>
      </div>

      <!-- New chat modal -->
      <div v-if="showNewChatModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div class="bg-white rounded-lg p-6 max-w-md w-full">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Start a new chat</h3>
          <input
              v-model="searchQuery"
              type="text"
              placeholder="Search users..."
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mb-4"
          />
          <div class="max-h-60 overflow-y-auto">
            <div
                v-for="user in filteredUsers"
                :key="user.uid"
                @click="startChat(user)"
                class="p-2 hover:bg-gray-50 cursor-pointer rounded-md"
            >
              {{ user.displayName || user.email }}
            </div>
          </div>
          <div class="mt-4 flex justify-end">
            <button
                @click="showNewChatModal = false"
                class="mr-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
  getDocs,
  getDoc,
  setDoc,
  Timestamp
} from 'firebase/firestore'
import { useRouter } from 'vue-router'
import { getFirestore } from 'firebase/firestore'

const db = getFirestore()
const auth = useFirebaseAuth()
const router = useRouter()
const currentUser = computed(() => auth?.currentUser)
const loading = ref(true)

// Chat state
const chats = ref<any[]>([])
const selectedChat = ref<any>(null)
const messages = ref<any[]>([])
const newMessage = ref('')
const messagesContainer = ref<HTMLElement | null>(null)

// New chat state
const showNewChatModal = ref(false)
const searchQuery = ref('')
const users = ref<any[]>([])

// Ensure user document exists
const ensureUserDocument = async () => {
  if (!currentUser.value) return

  try {
    const userRef = doc(db, 'users', currentUser.value.uid)
    const userDoc = await getDoc(userRef)

    if (!userDoc.exists()) {
      await setDoc(userRef, {
        uid: currentUser.value.uid,
        email: currentUser.value.email,
        displayName: currentUser.value.displayName || currentUser.value.email?.split('@')[0] || 'Unknown User',
        photoURL: currentUser.value.photoURL || null,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      })
    } else {
      await updateDoc(userRef, {
        updatedAt: serverTimestamp(),
        email: currentUser.value.email,
        displayName: currentUser.value.displayName || userDoc.data().displayName,
        photoURL: currentUser.value.photoURL || userDoc.data().photoURL
      })
    }
  } catch (error) {
    console.error('Error ensuring user document:', error)
  }
}

// Initialize chat
onMounted(async () => {
  if (!currentUser.value?.uid) {
    router.push('/login')
    return
  }

  try {
    await ensureUserDocument()

    const chatsQuery = query(
        collection(db, 'chats'),
        where('participants', 'array-contains', currentUser.value.uid),
        orderBy('lastMessageAt', 'desc')
    )

    onSnapshot(chatsQuery, async (snapshot) => {
      const updatedChats = []

      for (const doc of snapshot.docs) {
        const chat = { id: doc.id, ...doc.data() }
        const otherUserId = chat.participants.find((id: string) => id !== currentUser.value?.uid)
        const userDoc = await getDocs(query(collection(db, 'users'), where('uid', '==', otherUserId)))

        chat.otherUser = userDoc.docs[0]?.data() || {
          displayName: 'Unknown User',
          email: '',
          uid: otherUserId
        }

        updatedChats.push(chat)
      }

      chats.value = updatedChats
      loading.value = false
    })

    const usersSnapshot = await getDocs(collection(db, 'users'))
    users.value = usersSnapshot.docs
        .map(doc => ({
          uid: doc.data().uid,
          displayName: doc.data().displayName || 'Unknown User',
          email: doc.data().email || '',
          photoURL: doc.data().photoURL || null
        }))
        .filter(user => user.uid !== currentUser.value?.uid)
  } catch (error) {
    console.error('Error initializing chat:', error)
    loading.value = false
  }
})

// Filter users for new chat
const filteredUsers = computed(() => {
  if (!searchQuery.value) return users.value

  const query = searchQuery.value.toLowerCase()
  return users.value.filter(user =>
      user.displayName?.toLowerCase().includes(query) ||
      user.email?.toLowerCase().includes(query)
  )
})

// Select chat and load messages
const selectChat = async (chat: any) => {
  selectedChat.value = chat

  const messagesQuery = query(
      collection(db, 'chats', chat.id, 'messages'),
      orderBy('timestamp', 'asc')
  )


  onSnapshot(messagesQuery, (snapshot) => {
    messages.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    scrollToBottom()
  })
}

// Format timestamp
const formatTime = (timestamp: Timestamp) => {
  if (!timestamp) return ''
  return new Date(timestamp.seconds * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Send message
const sendMessage = async () => {
  if (!newMessage.value.trim() || !selectedChat.value?.id || !currentUser.value?.uid) return

  try {
    await addDoc(collection(db, 'chats', selectedChat.value.id, 'messages'), {
      text: newMessage.value.trim(),
      senderId: currentUser.value.uid,
      timestamp: serverTimestamp()
    })

    await updateDoc(doc(db, 'chats', selectedChat.value.id), {
      lastMessage: {
        text: newMessage.value.trim(),
        senderId: currentUser.value.uid
      },
      lastMessageAt: serverTimestamp()
    })

    newMessage.value = ''
  } catch (error) {
    console.error('Error sending message:', error)
  }
}

// Start new chat
const startChat = async (user: any) => {
  if (!currentUser.value?.uid) return

  try {
    const existingChatQuery = query(
        collection(db, 'chats'),
        where('participants', 'array-contains', currentUser.value.uid)
    )

    const existingChats = await getDocs(existingChatQuery)
    const existingChat = existingChats.docs.find(doc =>
        doc.data().participants.includes(user.uid)
    )

    if (existingChat) {
      selectChat({ id: existingChat.id, ...existingChat.data() })
    } else {
      const chatData = {
        participants: [currentUser.value.uid, user.uid],
        createdAt: serverTimestamp(),
        lastMessageAt: serverTimestamp(),
        lastMessage: null
      }

      const chatRef = await addDoc(collection(db, 'chats'), chatData)

      selectChat({
        id: chatRef.id,
        ...chatData,
        otherUser: {
          uid: user.uid,
          displayName: user.displayName || 'Unknown User',
          email: user.email || ''
        }
      })
    }

    showNewChatModal.value = false
  } catch (error) {
    console.error('Error starting chat:', error)
  }
}

// Scroll to bottom of messages
const scrollToBottom = () => {
  setTimeout(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  }, 100)
}

// Auto-scroll when new messages arrive
watch(messages, scrollToBottom)
</script>
