import GitResultsItem from './GitResultsItem';

const GitResults = (props: any) => {
   let allResults;
   const gitData = props.returnData.items;

   if (gitData !== undefined || null) {
      allResults = props.returnData.items.map((item: any, index: any) => (
         <GitResultsItem
            user={item.login}
            repo={item.name}
            key={index}
         />
      ));
   }

   return <ul>{allResults}</ul>
}

export default GitResults;