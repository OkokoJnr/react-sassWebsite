import './video.css'
function Video(){

    return(<>
    <section class="video bg-black">
      <div class="container-sm">
        <h2 class="video-heading text-xl text-center">
          See how it works and get started in less than 2 minutes
        </h2>
        <div class="video-content">
          <a href="#">
            <img
              src="./../asset/video-preview.png"
              alt="video"
              class="video-preview"
            />
          </a>
          <a href="#" class="btn btn-primary">Get Started</a>
        </div>
      </div>
    </section>
    </>)
}

export default Video;