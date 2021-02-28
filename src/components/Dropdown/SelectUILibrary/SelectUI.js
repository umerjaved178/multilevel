import React from 'react'
import Select from 'react-select'
import classes from './SelectUI.module.css'

function Selection(props) {
    const customStyles = {
        menu: (provided, state) => ({
          ...provided,
        //   borderBottom: '1px dotted pink',
          color: 'black',
        //   backgroundColor: '#D0D2D6',
        //   ':active': {
        //     // ...styles[':active'],
        //     color: '#9CA2AC '
        //   },
        //   '#9CA2AC'
        //   opacity: '1',
        //   backgroundColor: 'neutral40',
        //   color: state.selectProps.menuColor,
        }),
        // option: (provided, state) => ({
        //     ...provided,

        //     color: 'black',
        //     ':active': {
        //         // ...styles[':active'],
        //         backgroundColor: '#808080'
        //         //   !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
        //       },
        //       ':hover': {
        //         // ...styles[':active'],
        //         backgroundColor: '#D0D2D6'
        //         //   !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
        //       },
        // })

        
        // placeholder: (provided, state) => ({
        //     ...provided,
        //     placeholder: 'asd'
        // })
      
        // singleValue: (provided, state) => {
        //   const opacity = state.isDisabled ? 0.5 : 1;
        //   const dropdownIndicator = 'opacity 300ms';
      
        //   return { ...provided, dropdownIndicator };
        // }
      }
    return (
        <div className={classes.Selection}>
            <Select
                styles={customStyles}
                isMulti
                closeMenuOnSelect={false}
                name="colors"
                options={props.options}
                className="basic-multi-select"
                classNamePrefix="select"
                hideSelectedOptions={false}
                theme={theme => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary: '#9CA2AC',
                      primary25: '#D0D2D6',
                      primary50: '#9CA2AC'
                    },
                  })}
            />
        </div>
    )
}

export default Selection
