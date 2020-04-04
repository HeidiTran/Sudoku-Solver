# **Getting Started**

1. Start by creating a new React app:

        npx create-react-app sudoku-solver
        cd sodoku-solver
        npm start

2. These are the main components in the app:

        <HomeComponent /> - The home component is the homepage of the app and contains a navigation bar, board, and footer. 

        <AboutComponent /> - The about component is the about page, which contains a navigation bar, some information about the app, and a footer.
        
        <NavMenuComponent /> - The navigation menu component is used by the home and about components. It is built using React Bootstrap.

        <BoardComponent /> - The board component is the top-level component that passes down instructions like how to handle on-click events to the squares. The board itself has a state which is a 2D array that contains the numerical value of the squares. This is passed down to the squares as a property every time the board is rendered.

        <SquareComponent /> - The square component is a button that is rendered with the value passed down by the board. When you click on a square, it increments the square's value by 1 until it reaches 9. Clicking again when the button's value is 9 will cause the square to have no value.