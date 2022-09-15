# Create React App

https://reactjs.org/docs/create-a-new-react-app.html 

        npx create-react-app my-app
        cd my-app
        npm start

# 2 ways to declare a function which return something

        const App = () => (
        );

<br>

        const App = () => {
        return
        };


# Un composant, c'est une fonction

    const Header = (props) => {
    
        const {title, difficulty, author, image} = props;
    
    return(
    <div 
    className="header" 
    style={{backgroundImage: `url(${image})`,}}>
        <div className="header-content">
            <h1 className="header-title">{title}</h1>
            <p className="header-infos">
                {author} - {difficulty}
            </p>
        </div>
    </div>

    )
    };
    
>L’endroit ou je declare le composant, c’est le fichier avec le nom du composant.

    const App = () => (
      <div className="app">
      <Header 
      title={data.title}
      difficulty={data.difficulty}
      author={data.author}
      image = {data.thumbnail}
      />  
      <Ingredients list={data.ingredients}/>
      <Etapes/>
      </div>
    );

>L'endroit ou j'utilise le composant, c'est la ou je lui donne les parametres (props).

    const Ingredients = (props) => {
    const {list} =props;
    return (
    <div className='ingredients'>

    {
        list.map((ingredientObject) => (
        <div key={ingredientObject.id} className='ingredients'>

        <span className='ingredient-quantity'>
        {ingredientObject.quantity} {ingredientObject.unit}
        </span>

        <span className='ingredient-name'>
        {ingredientObject.name}
        </span>

        </div>   
        ))
    }

    </div>

    )};

> Quand tu utilises map, il faut donner une key

# Proptypes

    npm install --save prop-types
    
<br>
    
    Header.propTypes = {
    title: Proptypes.string.isRequired,
    difficulty: Proptypes.string.isRequired,
    author: Proptypes.string.isRequired,
    iamge: Proptypes.string.isRequired,

    }
    
<br>
    
    Ingredients.propTypes = {
    list: Proptypes.arrayOf(
        Proptypes.shape({
        id: Proptypes.number.isRequired,
        name: Proptypes.string.isRequired,
        quantity:Proptypes.number.isRequired,
        unit: Proptypes.string.isRequired,
        }),
    ).isRequired,
    
    };
    
