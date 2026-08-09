import { useState, useEffect } from 'react';
import styles from './SnackForm.module.css';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const isEditing = Boolean(editingSnack);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false });

  useEffect(() => {
    if (editingSnack) {
      // populate form fields with the snack's curr vals
      setName(editingSnack.name);
      setRating(editingSnack.rating);
    } else {
      // reset the form field to empty values
      setName('');
      setRating('');

      // reset touched state when switching between add/edit modes
      setTouched({ name: false, rating: false });
    }
  }, [editingSnack]);

  function handleSubmit(e) {
    e.preventDefault();

    if (validateName() && validateRating()) {
      if (isEditing) {
        updateSnack(editingSnack.id, name, rating);
      } else {
        addSnack(name, rating);
        setName('');
        setRating('');
      }
      setTouched({ name: false, rating: false });
    } else {
      setTouched({ name: true, rating: true });
    }
  }

  function validateName() {
    // return true if name is not empty after trimming
    return name.trim() !== '';
  }

  function validateRating() {
    return rating !== '';
  }

  function getNameError() {
    if (!validateName() && touched.name) {
      return 'Snack name is required';
    }
  }

  function getRatingError() {
    if (!validateRating() && touched.rating) {
      return 'Please select a rating';
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, name: true }))}
          className={styles['field-input']}
          placeholder="Enter snack name"
        />
        {getNameError() && <div className={styles.error}>{getNameError()}</div>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating} //
          onChange={(e) => setRating(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, rating: true }))}
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
        />
        {getRatingError() && (
          <div className={styles.error}>{getRatingError()}</div>
        )}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
