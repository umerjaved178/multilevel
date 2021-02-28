import React from 'react'
import { useState } from 'react';
import MultiMenus from './Dropdown2/MultiMenus';
import List from './List/List';


function Parent() {
    const [category, setcategory] = useState( {
        "chuss1":{
        'dropped': false,
          label: "Menu 1"
        },
        "chuss2":{
          'dropped': false,
          label: "Menu 2",
          submenu: [
            {
              label: "Sub Menu 1"
            },
            {
              label: "Sub Menu 2"
            }
          ]
        },
        "chuss3":{
            'dropped': false,
          label: "Menu 3",
          submenu: [
            {
              label: "Sub Menu 1",
              submenu: [
                {
                  label: "Boom 1"
                },
                {
                  label: "Boom 2"
                }
              ]
            },
            {
              label: "Sub Menu 2",
              submenu: [
                {
                  label: "Deep 1"
                },
                {
                  label: "Deep 2",
                  submenu: [
                    {
                      label: "Lorem 1"
                    },
                    {
                      label: "Lorem 2",
                      submenu: [
                        {
                          label: "Super Deep"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              label: "Sub Menu 3"
            },
            {
              label: "Sub Menu 4",
              submenu: [
                {
                  label: "Last 1"
                },
                {
                  label: "Last 2"
                },
                {
                  label: "Last 3"
                }
              ]
            }
          ]
        }
    })
   
    // {
    //     'category_1': {
    //             'dropped': false,
    //             'subCategory': [
    //                 {label: "Sub category 1-A", value: "Sub category 1-A"},
    //                 {label: "Sub category 1-B", value: "Sub category 1-B"}, 
    //                 {label: "Sub category 1-C", value: "Sub category 1-C"}, 
    //                 ]
    //             }, 
    //     "category_2": {
    //             'dropped': false,
    //             'subCategory':  [
    //                 {label: "Sub category 2-A", value: "Sub category 2-A"}, 
    //                 {label: "Sub category 2-B", value: "Sub category 2-B"}, 
    //                 {label: "Sub category 2-C", value: "Sub category 2-C"}, 
    //                 ]
    //             },
    //     }

    const toggleHandler = (categoryName) => {
        let newState = {...category}
        newState[categoryName].dropped = !newState[categoryName].dropped
        setcategory(prevState =>  newState)
      } 

    

    return (
        <div >
            {/* <List categoryKeys={Object.keys(category)} toggleHandler={toggleHandler} category={category}/> */}
            <MultiMenus menus={category}/>
        </div>
    )
}













































export default Parent
