import { useState } from "react"
export function TwitterFollowCard({ children, userName = 'Pordefecto', initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    // const  state = useState(false)
    // const isFollowing =state[0]
    // const setIsFollowing=[1]
    console.log('Imprimiendo isFollowing ' + isFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'
    
    const handleClick = () => {
        console.log('Hola Mundo 2')
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="El avatar de Midudev"
                    src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
//2:01:46 parte del video