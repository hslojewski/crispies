import FilteredProjects from './FilteredProjects';
import Nav from './Nav';
import './Forum.scss';


const React = require('react');

class Projects extends React.Component {
    // componentDidMount() {
    //     document.querySelector('body').scrollTo({
    //         top: 0,
    //         left: 0
    //     });
        // document.querySelector("body").scrollTo(0,0);
    // }

    render() {
        const {
            displayProjects, clearActiveTags, toggleAccordion, projectData, getProjectData, page = 1,
            activeTags = [], tools = [], skills = [], affiliations = [], roles = [], projects = {}, filterType = "AND", tagAccordions = {}
        } = this.props;

        var relatedForums = [
            {
                "topic": "What’s the Scariest Haunted Location You’ve Ever Visited?",
                "preview": "Share your experiences and impressions of the most frightening haunted places you’ve explored, from abandoned hospitals to old mansions.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "What’s the Most Convincing Paranormal Documentary You’ve Seen?",
                "preview": "Review documentaries or series about the paranormal and share which ones you found most convincing or intriguing.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "Have You Ever Experienced Sleep Paralysis? What Was It Like?",
                "preview": "Discuss your encounters with sleep paralysis, including any hallucinations or sensations that accompanied the experience.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "Can Animals Sense the Supernatural? Share Your Stories.",
                "preview": "Discuss whether pets or other animals have shown unusual behavior in the presence of paranormal activity, and share any personal stories.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "What’s Your Take on the Paranormal Investigation Tools? Do They Work?",
                "preview": "Review various ghost-hunting tools and gadgets, such as EVP recorders and spirit boxes, and share your experiences with them.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "Have You Ever Seen a UFO? Describe Your Experience.",
                "preview": "Share details of any UFO sightings you’ve had, including the appearance of the craft and any unusual behavior you observed.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "Are There Any Historical Figures Who Are Said to Haunt Their Old Homes?",
                "preview": "Explore stories and legends about historical figures who are rumored to haunt locations associated with their lives or deaths.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "The Influence of Media on Paranormal Beliefs: How Do Movies and Books Shape Our Views?",
                "preview": "Analyze how media representations of the paranormal influence public perception and personal beliefs.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "Spontaneous Human Combustion: Fact or Fiction?",
                "preview": "Delve into cases of spontaneous human combustion and discuss whether there’s a plausible explanation or if it’s pure myth.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "The Connection Between Mental Illness and Paranormal Experiences",
                "preview": "Explore theories and personal stories about the connection between mental health issues and paranormal encounters.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "Nightmares vs. Paranormal Encounters: How to Tell the Difference",
                "preview": "Discuss how to distinguish between nightmares and actual paranormal experiences, and share strategies for differentiating them.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "Spooky Sounds: Unexplained Noises in Your Home",
                "preview": "Share experiences with mysterious or unsettling sounds heard in your home and discuss possible explanations.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "Psychic Predictions: Accuracy and Impact on Your Life",
                "preview": "Discuss personal experiences with psychic readings or predictions and whether they’ve had an impact on your life.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "The Haunting of Historical Sites: Famous Locations with Ghostly Legends",
                "preview": "Explore historical sites known for their ghost stories and discuss the historical events that may have led to these legends.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "Creepy Dolls: Stories Behind Haunted Toys",
                "preview": "Share accounts of haunted or creepy dolls and toys, and explore the chilling stories associated with them.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "Cursed Artifacts: Which Objects Are Said to Bring Misfortune?",
                "preview": "Delve into stories about objects believed to be cursed and the strange events that follow their owners.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "Urban Legends That Turned Out to Be True",
                "preview": "Explore urban legends and folklore that have been proven to have some basis in reality, and discuss their origins.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "The Science of Ghosts: Can Technology Capture the Supernatural?",
                "preview": "Debate whether current technology can truly detect ghosts and other paranormal phenomena, and review the effectiveness of various tools.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "Creepiest Abandoned Places: Have You Explored Any?",
                "preview": "Discuss your visits to abandoned locations, including any spooky experiences or strange occurrences.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "“Unexplained Disappearances: Cases That Still Haunt Us",
                "preview": "Share and analyze mysterious disappearances that defy logical explanation and remain unresolved.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "The Shadow People Phenomenon: What Are They Really?",
                "preview": "Explore the eerie occurrences of shadow people and discuss theories about their origins and purposes.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "What’s Your Favorite Paranormal Book or Novel? Why?",
                "preview": "Recommend and discuss your favorite books or novels about the paranormal, including what makes them stand out to you.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "What’s Your Favorite Supernatural Creature or Being from Mythology?",
                "preview": "Discuss mythical or supernatural creatures from various mythologies and why they fascinate you.",
                "upvotes": "random",
                "comments": "random"
            },
            {
                "topic": "Do You Think There’s a Scientific Explanation for Most Paranormal Events?",
                "preview": "Explore theories that might explain paranormal phenomena through scientific or psychological means, and discuss their validity.",
                "upvotes": "random",
                "comments": "random"
            }
        ];

        return (
            <div className="forum">
                <Nav />
                <div className="page-content projects-list">
                    <table className="main-page">
                        <tr>
                            <div className="forum-content">
                                <table>
                                    <tr>
                                        <td>
                                            <div className="post-avatar">
                                                <img src={[process.env.PUBLIC_URL, "images/thumbnails/placeholder.png"].join("/")} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <p>
                                                <b className="post-user">username</b>
                                                <i className="post-date">8 years ago</i>
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                                <h2>What's your paranormal experience that no one believes?</h2>
                                <p>I’m intrigued by the cryptic and often dismissed paranormal experiences that people have had. Have you ever encountered a cryptid or witnessed something so strange and otherworldly that no one seems willing to believe your story? Whether it’s a glimpse of a mysterious creature, an inexplicable event, or an eerie occurrence that defies logical explanation, I’d love to hear your tale.</p>
                                <p>Share your most incredible, unexplainable experiences that challenge the boundaries of reality and skepticism. Let's delve into these fascinating and cryptid-filled encounters and see if we can uncover some truth behind the supernatural!</p>
                                <p>Looking forward to your spine-tingling stories!</p>
                                <FilteredProjects projects={projects} page={page} activeTags={activeTags} filterType={filterType} displayProjects={displayProjects} projectData={projectData} getProjectData={getProjectData} />
                            </div>
                            <div className="sidebar">
                                <div className="category">
                                    <p className="title">b/CreepyStuff</p>
                                    <p>Creepy pasta, creepy pizza, creepy smorgasbord.</p>
                                </div>
                                {relatedForums.map(forum => {
                                    return(
                                        <div className="other-topic">
                                            <p className="title">{forum.topic}</p>
                                            <p>{forum.preview}</p>
                                            <p className="reactions">{forum.comments == "random" ? Math.floor(Math.random() * 50) : forum.upvotes} upvotes · {forum.upvotes == "random" ? Math.floor(Math.random() * 50) : forum.comments} comments</p>
                                        </div> 
                                    )
                                })}
                            </div>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Projects;
