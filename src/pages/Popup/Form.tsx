import React, { memo } from 'react';
import './Form.css';

interface FormProps {
  handleFinish: () => any;
}

enum Mode {
  HIGH = 'high',
  NORMAL = 'normal',
  LOW = 'low',
}

enum ModeHelpText {
  high = 'I will remind you to some rest',
  normal = 'I will try to be as not annoying as possible',
  low = 'Cooldown my friend. You can do it.',
}

interface FormValue {
  workHour: number;
  workMinute: number;
  restMinute: number;
  mode: Mode;
}

const Form: React.FC<FormProps> = ({ handleFinish }) => {
  const [formValue, setFv] = React.useState<FormValue>({
    workHour: 0,
    workMinute: 30,
    restMinute: 1,
    mode: Mode.NORMAL,
  });

  return (
    <div className="form-container p-3">
      <div className="form-content">
        <div className="mb-3 row pr-0">
          <label htmlFor="interval" className="col-6 col-form-label">
            Your working period
          </label>
          <div className="row col-6">
            <div className="col-6 pr-0">
              <input
                className="form-control"
                type="number"
                id="workHour"
                min="0"
                max="2"
                value={formValue.workHour}
                onChange={({ target }) =>
                  setFv((o) => ({ ...o, workHour: Number(target.value) }))
                }
              />
            </div>
            <div className="col-6 pr-0">
              <input
                className="form-control"
                type="number"
                id="workMinute"
                min="0"
                max="30"
                step="5"
                value={formValue.workMinute}
                onChange={({ target }) =>
                  setFv((o) => ({ ...o, workMinute: Number(target.value) }))
                }
              />
            </div>
          </div>
          <div id="workHelp" className="form-text">
            You are going to work for {formValue.workHour} hour(s) and{' '}
            {formValue.workMinute} minutes(s) before taking a rest.
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="duration" className="col-6 col-form-label">
            Duration of your break
          </label>
          <div className="col-6">
            <input
              type="number"
              className="form-control"
              id="restMinute"
              name="restMinute"
              min="1"
              max="30"
              step="1"
              value={formValue.restMinute}
              onChange={({ target }) =>
                setFv((o) => ({ ...o, restMinute: Number(target.value) }))
              }
            />
          </div>
          <div id="restHelp" className="form-text">
            Take a break of {formValue.restMinute} minute(s). take it easy!
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="mode" className="col-6 col-form-label">
            Mode
          </label>
          <div className="col-6">
            <select
              className="form-select"
              aria-label="Mode"
              name="mode"
              value={formValue.mode}
              onChange={({ target }) =>
                setFv((o) => ({ ...o, mode: target.value as Mode }))
              }
            >
              <option value={Mode.HIGH}>Regular days</option>
              <option value={Mode.NORMAL}>Monday</option>
              <option value={Mode.LOW}>Deadline fighter</option>
            </select>
          </div>
          <div id="modeHelp" className="form-text">
            {ModeHelpText[formValue.mode]}
          </div>
        </div>
        <button className="form-finish-btn" onClick={handleFinish}>
          Back
          <span className="scroll-arrow">&lt;</span>
          <span className="scroll-arrow">&lt;</span>
          <span className="scroll-arrow">&lt;</span>
        </button>
      </div>
    </div>
  );
};

export default memo(Form);
