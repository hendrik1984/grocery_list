import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className="addForm" action="" onSubmit={ handleSubmit }> 
      <label htmlFor="addItem">Add Item</label>
      <input 
        id="AddItem"
        type="text"
        autoFocus
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)} />
      <button type="submit" aria-label="Add Item"><FaPlus /></button>
    </form>
  )
}

export default AddItem