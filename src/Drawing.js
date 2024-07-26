import React from 'react';
import './Drawing.scss';

class Drawing extends React.Component {

  render() {    
    return (
        <div>

      <div className="drawing light-styles">
        <table className="header">
            <tr>
                <td>
                    <img className="header-image flipped" src={[process.env.PUBLIC_URL, "projects/thumbnails/crispin_white.png"].join("/")} alt="" />
                </td>
                <td>
                    <h1>C r i s p i n's  C r yp t i d s</h1>
                </td>
                <td>
                    <img className="header-image " src={[process.env.PUBLIC_URL, "projects/thumbnails/crispin_white.png"].join("/")} alt="" />
                </td>
            </tr>
        </table>
        <p>Welcome to my site, managed by me - Crispin!</p>
        <p className="turquoise">Cryptids are my passion. Here you will find pages about little known phenomena I've collected over the years.</p>
        <p className="turquoise">You won't find these on Google, Wiki or Reddit!</p>
        <marquee>BEWARE: Read at <u><b>your</b> own risk</u>!!</marquee>
        <br /><br />
        <div className="nav">
        <button href="">What's a Cryptid?</button><button href="">Photo Gallery (Coming Soon!)</button><button href="">Guestbook</button>
        <hr />
        <a href="">Previous</a>▼<a href="">Next</a>▲
        </div>

        <h1 className="article-title">T h  e   L o n g -A r m e d   W o m a n</h1>
        <h3><i>It grows stronger the <u>more</u> you <u>deny</u> it</i></h3>
        <p className="orange">In varius iaculis nibh nec porttitor. Quisque euismod augue ipsum, in pretium lorem bibendum at. Proin lorem neque, scelerisque quis elit a, tincidunt sagittis dolor. Quisque facilisis vestibulum finibus. Donec quis velit dolor. Sed augue lectus, ullamcorper sed ultricies ut, pulvinar quis diam. In nec ligula turpis. Fusce est risus, interdum ac libero sit amet, sodales rutrum ante. Nullam et libero vestibulum dolor pulvinar rutrum quis in mi. Vivamus ac aliquet justo, nec viverra purus. Suspendisse id neque mauris. Vivamus eu eros eu erat hendrerit vehicula nec sed neque. Mauris luctus tellus tortor, sit amet fringilla purus pulvinar eu.</p>
        <h3>No matter how hard you try to avoid it, it <u>always</u> finds a way in.</h3>
        <img width="300px" src={[process.env.PUBLIC_URL, "projects/thumbnails/woman.jpg"].join("/")} ></img>
        <h3>It always finds a way to be <u>acknowledged</u>.</h3>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum eget risus quis viverra. <span className="orange">Aliquam a auctor metus. Ut ornare rutrum quam et iaculis. Ut condimentum, dui pulvinar euismod mollis, elit urna porta est, vitae cursus eros urna ac libero. </span>Proin maximus quis orci eu condimentum. Nullam pretium blandit varius. Maecenas nec magna vel quam elementum condimentum. Praesent non tristique tortor. Aenean interdum ac urna vitae pretium. Praesent aliquam odio tincidunt, dapibus dui vel, venenatis quam. Integer lacus dui, molestie in volutpat eu, ultrices ultricies nisi. Mauris vel lobortis velit, vitae gravida ligula. Praesent auctor, erat vel accumsan vulputate, urna nibh dignissim turpis, id fermentum turpis ligula vel nisl.</p>
        <h3>If you <span className="draw">draw</span> it,<br /><span className="come">>it will come for you.</span></h3>
        <p className="turquoise">In varius iaculis nibh nec porttitor. Quisque euismod augue ipsum, in pretium lorem bibendum at. Proin lorem neque, scelerisque quis elit a, tincidunt sagittis dolor. Quisque facilisis vestibulum finibus. Donec quis velit dolor. Sed augue lectus, ullamcorper sed ultricies ut, pulvinar quis diam. In nec ligula turpis. Fusce est risus, interdum ac libero sit amet, sodales rutrum ante. Nullam et libero vestibulum dolor pulvinar rutrum quis in mi. Vivamus ac aliquet justo, nec viverra purus. Suspendisse id neque mauris. Vivamus eu eros eu erat hendrerit vehicula nec sed neque. Mauris luctus tellus tortor, sit amet fringilla purus pulvinar eu.</p>
        <p>
            <a href="">Lorem Ipsum</a>
        </p>
        <p>
            <a href="">The Long-Armed Woman</a>
        </p>
        <p>
            <a href="">Lorem Ipsum</a>
        </p>
        <p>
            <a href="">Loch Ness Mermaid</a>
        </p>
      </div>

      </div>
    );
  }
}

export default Drawing;
