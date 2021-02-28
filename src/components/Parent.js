import React from 'react'
import { useState } from 'react';
import MultiMenus from './Dropdown2/MultiMenus';
import List from './List/List';


function Parent() {
    const [category, setcategory] = useState( [
        {
          label: "category_1"
        },
        {
          label: "category_2",
          submenu: [
            {
              label: 'Sub category 2-A'
            },
            {
              label: "Sub category 2-A"
            }
          ]
        },
        {
          label: "category_3",
          submenu: [
            {
              label: "Sub category 3-A",
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
              label:"Sub category 3-B",
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
              label: "Sub category 3-C",
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
    ])
   
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
