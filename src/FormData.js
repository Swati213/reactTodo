import React from "react";
import { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "./FormData.css";
import { useEffect } from "react";
//import { lighten } from "@material-ui/core";

//to get data from localstorage
const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

export const FormData = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [items, setItems] = useState(getLocalItems());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else if (title && desc && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, title, desc };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setTitle(" ");
      setDesc(" ");
      setIsEditItem(null);
    } else {
      const person = { id: new Date().getTime().toString(), title, desc };
      console.log(person);
      setItems((items) => {
        return [...items, person];
      });
      setTitle("");
      setDesc("");
    }
  };
  const deleteItem = (index) => {
    const updatedItem = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updatedItem);
  };

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    setToggleSubmit(false);
    setTitle(newEditItem.title);
    setDesc(newEditItem.desc);
    setIsEditItem(id);
  };
  const removeAll = () => {
    setItems([]);
  };
  //add data to localstorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <div className="fdata">
      <h2>Welcome to do list</h2>
      <div className="formdata">
        <form>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="Desc">Description</label>
          <input
            type="text"
            id="desc"
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          {toggleSubmit ? (
            <button className="btn" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          ) : (
            <i className="btn" onClick={handleSubmit}>
              <EditIcon />
            </i>
          )}
        </form>
      </div>
      <div>
        
        <ol className="todoStyle">
        <hr />
          <li>Sno</li>

          <li>Text</li>
          <li>Description</li>
          <li>Action</li>
        </ol>

        <div className="showdata">
          {items.map((elem, index) => {
            const { title, desc } = elem;

            return (
              <>
                <div key={elem.id}>
                  <table className="showdata">
                    <tr>
                      <div>
                        <th scope="col"> {index + 1} </th>
                        <td>{title}</td>
                        <td>{desc}</td>
                        <td>
                          <button onClick={() => editItem(elem.id)}>
                            <EditIcon />
                          </button>{" "}
                          <button onClick={() => deleteItem(elem.id)}>
                            <DeleteIcon />
                          </button>
                        </td>
                      </div>
                    </tr>
                  </table>
                </div>
              </>
            );
          })}

          <div>
            <button className="btn-look" onClick={removeAll}>Remove All</button>
          </div>
        </div>
      </div>
    </div>
  );
};
