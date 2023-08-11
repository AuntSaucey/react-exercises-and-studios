const RecipeAuthor = () => {
   let authorLink = "https://www.simplyrecipes.com/recipes/banana_bread/";
   let authorPhoto = "https://www.simplyrecipes.com/thmb/BmLdsbTN8CZ0UGXJ4SvBeYS_qmM=/120x180/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SRHeadshots-EliseBauer-5c36c598a88d4ba3bff66260a792ea47.jpg";
   let authorName = "Elise Bauer";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["3 medium ripe bananas", "1/3 cup melted butter", "1/2 baking soda", "3/4 cup sugar", "1 1/2 cups flour"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Banana Bread</h1>
            <p>Put those ripe bananas to use in the best banana bread recipe ever. Moist and delicious, it's easy to make—one bowl, no need for a mixer! </p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.simplyrecipes.com/thmb/mS48FV-FjGn-9uYk_Akm6pgd8OI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Easy-Banana-Bread-LEAD-2-66837beab63c495292d89743c6767171.jpg" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}