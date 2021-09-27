const GitReposItem = (props: any) => {
   return (
      <li>
         <a href={props.link}>
            <h1>{props.repo}</h1>
            <img src={props.profile} />
            <p className="author">by {props.author}</p>
            <p className="stars">{props.stars} stars</p>
         </a>
      </li>
   )
}

export default GitReposItem;