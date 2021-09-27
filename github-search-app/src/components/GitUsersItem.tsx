const GitUsersItem = (props: any) => {
   return (
      <li>
         <a href={props.link} target="_blank">
            <h1>{props.user}</h1>
            <img src={props.profile} />
         </a>
      </li>
   )
}

export default GitUsersItem;