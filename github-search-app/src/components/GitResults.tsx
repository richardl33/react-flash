import GitUsersItem from './GitUsersItem';
import GitReposItem from './GitReposItem';

const GitResults = (props: any) => {
   let allResults;
   const gitDataItems = props.returnData.items;

   if (gitDataItems !== undefined || null) {
      if (props.searchType === 'users') {
         allResults = props.returnData.items.map((item: any, index: number) => (
            <GitUsersItem
               key={`user-item-${index}`}
               link={item.html_url}
               user={item.login}
               profile={item.avatar_url}
            />
         ));
      } else if (props.searchType === 'repositories') {
         allResults = props.returnData.items.map((item: any, index: number) => (
            <GitReposItem
               key={`repo-item-${index}`}
               link={item.html_url}
               repo={item.name}
               author={item.owner.login}
               profile={item.owner.avatar_url}
               stars={item.stargazers_count}
            />
         ));
      }
   }

   return <ul className="git-result__container">{allResults}</ul>
}

export default GitResults;