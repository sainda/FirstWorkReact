import './App.css'
import Card from './Components/Card'


function App(){
    return(
        <div className="App">
            <div className="cards">
                <Card
                subTitle={"First blog post has been published. Team members will be able to edit this post and republish changes."}
                bgColor='yellow'/>
                <Card
                title={"second Card"}
                subTitle={"Second blog post has been published. Team members will be able to edit this post and republish changes."}

                bgColor='pink'/>
                <Card
                title={"third Card"}
                subTitle={"Third blog post has been published. Team members will be able to edit this post and republish changes."}
                bgColor='green'/>
            </div>
        </div>

    )
};
export default App;