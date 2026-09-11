import Layout from '../shared/Layout/Layout';
import '../App.css';

function TrashPage() {
  const mainContent = (
    <div>
      <header className="app-header">
        <h1>Trash</h1>
        <p className="subtitle">Deleted tasks will appear here</p>
      </header>

      <div className="card fade-in">
        <p className="empty-text">
          Trash is empty. Deleted tasks will be moved here.
        </p>
      </div>
    </div>
  );

  return <Layout sidebar={null}>{mainContent}</Layout>;
}

export default TrashPage;
