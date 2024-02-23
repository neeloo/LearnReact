import './Ns.css'
import NSheader from './NSheader'
import json from './Ns.json';
import Content from './Content';

function NS() {
  return (
    <div className='ns'>
        <NSheader/>
        <div className="pick">
            {
                json.map((e)=>{
                    return (
                        <Content title = {e.Title} Year = {e.Year}  img = {e.Poster} />
                    )
                })
            }
            <Content/>
        </div>
    </div>
  )
}

export default NS