import GitUsersItem from './GitUsersItem';
import GitReposItem from './GitReposItem';

const GitResults = (props: any) => {
   let allResults;
   const gitData = props.returnData.items;

   if (gitData !== undefined || null) {
      if (props.searchType === 'users') {
         allResults = props.returnData.items.map((item: any, index: number) => (
            <GitUsersItem
               key={index}
               link={item.html_url}
               user={item.login}
               profile={item.avatar_url}
            />
         ));
      } else if (props.searchType === 'repositories') {
         allResults = props.returnData.items.map((item: any, index: number) => (
            <GitReposItem
               key={index}
               link={item.html_url}
               repo={item.name}
               author={item.owner.login}
               profile={item.owner.avatar_url}
               stars={item.stargazers_count}
            />
         ));
      }
   }

   return <ul>{allResults}</ul>
}

export default GitResults;