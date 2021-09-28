const GitReposItem = (props: any) => {
   return (
      <li className="git-result__tile">
         <a className="git-result__link"
            href={props.link}
            target="_blank">
            <div className="git-result__profile"
               style={{ backgroundImage: `url(${props.profile})` }}></div>
            <div className="git-result__details">
               <h3 className="git-result__title">{props.repo}</h3>
               <p className="git-result__author">by {props.author}</p>
               <p className="git-result__stars">{props.stars} stars</p>
            </div>
         </a>
      </li>
   )
}

export default GitReposItem;