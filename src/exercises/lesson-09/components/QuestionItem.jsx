import { useContext, useState, useEffect } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  const { state, dispatch } = useContext(SurveyContext);

  useEffect(() => {
    /* Without this effect, if you start editing question X and then click the Edit button for
    question Y without canceling the edit for question X, then going back again to edit question X
    will show text from the old edit. Eg, if you edit question X from "How are you?" to "How are"
    and then click Edit on another question, and then click back again to edit question X, the text
    in the input box for editing question X will show up as "How are", instead of its actual value
    of "How are you?"
    */
    if (state.ui.editingQuestionId !== question.id) {
      setWorkingText(question.question);
    }
  }, [state.ui.editingQuestionId]);

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // TODO: Students will add edit functionality here
  const handleEdit = () => {
    console.log('TODO: Implement edit functionality');
    // Hint: Use SET_EDITING_QUESTION action
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: {
        questionId: question.id,
      },
    });
  };

  // TODO: Students will add save functionality here
  const handleSave = () => {
    console.log('TODO: Implement save functionality');
    // Hint: Use UPDATE_QUESTION_TEXT action with workingText
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: {
        id: question.id,
        newText: workingText,
      },
    });
  };

  // TODO: Students will add delete functionality here
  const handleDelete = () => {
    console.log('TODO: Implement delete functionality');
    // Hint: Show confirmation dialog, then use DELETE_QUESTION action
    const deleteIsConfirmed = window.confirm(
      'Are you sure you want to delete this question?'
    );
    if (deleteIsConfirmed) {
      dispatch({
        type: 'DELETE_QUESTION',
        payload: {
          id: question.id,
        },
      });
    }
  };

  const handleCancelEdit = () => {
    setWorkingText(question.question);
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: null },
    });
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          {/* TODO: Students add Edit and Delete buttons here */}
          <button
            className={styles['edit-btn']}
            onClick={() => {
              state.ui.editingQuestionId !== question.id
                ? handleEdit()
                : handleCancelEdit();
            }}
          >
            {state.ui.editingQuestionId !== question.id ? 'Edit' : 'Cancel'}
          </button>
          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      {/* TODO: Students will add conditional controlled form to edit question here */}
      {state.ui.editingQuestionId === question.id ? (
        <form>
          <input
            className={styles['question-input']}
            value={workingText}
            onChange={(e) => {
              setWorkingText(e.target.value);
            }}
          />
          <button
            type="button"
            className={styles['save-btn']}
            onClick={handleSave}
          >
            Save
          </button>
          <button
            type="button"
            className={styles['cancel-btn']}
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        </form>
      ) : (
        <div className={styles['question-content']}>
          <h3>{question.question}</h3>
        </div>
      )}

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                <input
                  className={styles['option-input']}
                  data-option={`${question.id}-option-${index}`}
                  type="text"
                  defaultValue={option}
                />
                <div className={styles['option-actions']}>
                  <button
                    type="button"
                    className={styles['edit-btn']}
                    onClick={() => {
                      const inputValue = document.querySelector(
                        `[data-option="${question.id}-option-${index}"]`
                      ).value;
                      dispatch({
                        type: 'UPDATE_OPTION_TEXT',
                        payload: {
                          questionId: question.id,
                          optionIndex: index,
                          newText: inputValue,
                        },
                      });
                    }}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    disabled={question.options.length <= 2}
                    className={styles['delete-btn']}
                    onClick={() => {
                      dispatch({
                        type: 'DELETE_OPTION_FROM_QUESTION',
                        payload: {
                          questionId: question.id,
                          optionIndex: index,
                        },
                      });
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}

            <button
              type="button"
              className={styles['add-option-btn']}
              onClick={() => {
                const optionText = prompt('New Option:');
                dispatch({
                  type: 'ADD_OPTION_TO_QUESTION',
                  payload: {
                    questionId: question.id,
                    optionText,
                  },
                });
              }}
            >
              + Add Option
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}
