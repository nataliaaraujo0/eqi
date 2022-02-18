import { ProviderContext } from './Context/ContextButtonIndexacao';
import { Dashboard } from './pages/Dashboard';

function App() {
    return (
        <ProviderContext>
            <Dashboard />
        </ProviderContext>
    );
}
export default App;
