import logo from './logo.svg';
import image from './Image.png';
import './App.css';

function App() {
  return (
    <form>
        <div class="id">
           <img src={image} alt="image" />
        </div>
        <div>
             <h3>Blog post published</h3>
             <p>This blog post has been published. Team members will be able to edit this post and republish changes.</p>
             <input type="button" value="Cancel" id="cancel" />
             <input type="button" value="Confirm" id="confirm" />
        </div>
    </form>
  );
}

export default App;
