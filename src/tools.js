import TorrentMagnet from '@/components/Tools/TorrentMagnet.vue'
import StrLen from '@/components/Tools/StrLen.vue'
import Base64 from '@/components/Tools/Base64.vue'
import CSSFormat from '@/components/Tools/CSSFormat.vue'

const tools = [
  {
    name: 'Torrent&Magnet',
    id: 1,
    component: TorrentMagnet,
    path: '/torrenttomagnet'
  },
  {
    name: 'StringLength',
    id: 2,
    component: StrLen,
    path: '/strlen'
  },
  {
    name: 'Base64',
    id: 3,
    component: Base64,
    path: '/base64'
  },
  {
    name: 'CSS Format',
    id: 4,
    component: CSSFormat,
    path: '/cssformat'
  }
]

export default tools
