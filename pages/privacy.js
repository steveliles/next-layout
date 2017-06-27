import OverallLayout from '../components/OverallLayout'
import Modal from '../components/Modal'

export default () => (
  <OverallLayout
    modal={{
      title: 'Modal Privacy',
      view:
        <Modal>
          <div>This is a modal (privacy).</div>
        </Modal>
    }}
  />
)
