import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SnackOrBoozeApi from "./Api";
import Home from "./Home";
import ItemDetail from "./ItemDetail";
import Menu from "./Menu";
import NavBar from "./NavBar";
import NewItemForm from "./NewItemForm";
import NotFound from "./NotFound";

function App() {
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const [snackList, drinkList] = await Promise.all([
          SnackOrBoozeApi.getSnacks(),
          SnackOrBoozeApi.getDrinks(),
        ]);

        setSnacks(snackList);
        setDrinks(drinkList);
      } catch (err) {
        console.error("Error loading menu", err);
        setError("Unable to load the menu. Please try again shortly.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchMenu();
  }, []);

  // Persist a newly created snack or drink and update the relevant cache.
  const handleAddItem = async (type, formData) => {
    const newItem = await SnackOrBoozeApi.createItem(type, formData);

    if (type === "snacks") {
      setSnacks((items) => [...items, newItem]);
    } else {
      setDrinks((items) => [...items, newItem]);
    }

    return newItem;
  };

  if (isLoading) {
    return <p className="mt-5 text-center">Loading &hellip;</p>;
  }

  if (error) {
    return <p className="mt-5 text-center text-danger">{error}</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main className="container py-4">
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu
                title="Snacks"
                items={snacks}
                basePath="snacks"
                description="Treat yourself to something salty or savory."
              />
            </Route>
            <Route exact path="/drinks">
              <Menu
                title="Drinks"
                items={drinks}
                basePath="drinks"
                description="Shaken, stirred, or sipped straight."
              />
            </Route>
            <Route exact path="/snacks/:id">
              <ItemDetail items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks/:id">
              <ItemDetail items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/add">
              <NewItemForm addItem={handleAddItem} />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
