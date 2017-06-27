import OverallLayout from '../components/OverallLayout'
import Modal from '../components/Modal'

export default () => (
  <OverallLayout
    modal={{
      title: 'Modal About',
      view:
        <Modal>
          This is a modal (about).
        </Modal>
    }}
  />
)
