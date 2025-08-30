import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Trending from './components/Trending';
import Gaming from './components/Gaming';
import Video from './components/Video';
import Login from './components/Login';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import SavedVideos from './components/SavedVideos';
import ThemeContext, { ThemeProvider } from './context/ThemeContext'; // Import ThemeContext
import { SavedVideosProvider } from './context/savedVideosContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <SavedVideosProvider>
        <ThemeContext.Consumer>
          {value => {
            const { isDarkTheme } = value;
            if (isDarkTheme) {
              document.body.classList.add('dark-theme');
            } else {
              document.body.classList.remove('dark-theme');
            }
            return (
              <BrowserRouter>
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <ProtectedRoute exact path="/" component={Home} />
                  <ProtectedRoute exact path="/trending" component={Trending} />
                  <ProtectedRoute exact path="/gaming" component={Gaming} />
                  <ProtectedRoute exact path="/videos/:id" component={Video} />
                  <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </BrowserRouter>
            );
          }}
        </ThemeContext.Consumer>
      </SavedVideosProvider>
    </ThemeProvider>
  );
}

export default App;