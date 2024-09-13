import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div>
            <main>
                <div className="text-box">
                    <h1>Welcome to MARICHI HOR</h1>
                    <p>
                    Welcome to Marichi Hall of Residence, your new home away from home! We are thrilled to have you join our vibrant community of bright minds and future leaders. As you step into this chapter of your academic journey, know that Marichi Hall is more than just a place to rest your head—it's a launchpad for your dreams and aspirations. Here, you'll find a supportive environment designed to nurture your intellectual curiosity, personal growth, and social connections. Our doors are open to a world of possibilities, where lifelong friendships are forged, ideas are exchanged, and memories are created. Whether you're a first-year student or a seasoned scholar, Marichi Hall offers you a unique blend of comfort, inspiration, and opportunity. We invite you to make yourself at home, engage with your fellow residents, and embrace the countless experiences that await you. Your journey at Marichi Hall starts now, and we can't wait to see how brightly you'll shine!
                    </p>
                    <Link to="/Contact" className="hero-btn">Contact Us Here</Link>
                </div>
            </main>
        </div>
    )
}

export default Hero;