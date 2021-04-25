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
  reminder: boolean;
}

const Form: React.FC<FormProps> = ({ handleFinish }) => {
  const [formValue, setFv] = React.useState<FormValue>({
    workHour: 1,
    workMinute: 0,
    restMinute: 10,
    mode: Mode.NORMAL,
    reminder: true,
  });

  React.useEffect(() => {
    chrome.storage.local.get(
      ['workHour', 'workMinute', 'restMinute', 'mode', 'reminder'],
      (result) => {
        setFv(result as FormValue);
      }
    );
  }, []);

  React.useEffect(() => {
    Object.entries(formValue).map(([key, value]) =>
      chrome.storage.local.set({ [key]: value })
    );
  }, [formValue]);

  return (
    <div className="form-container p-3">
      <div className="form-content">
        <div className="mb-3 row pr-0">
          <div className="form-check form-switch flex-switch">
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable break reminder</label>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={formValue.reminder} 
              onChange={() => setFv((o) => ({ ...o, reminder: !formValue.reminder }))}
            />
          </div>
          <div id="workHelp" className="form-text">
            {console.log(formValue)}
            {formValue.reminder &&
              <p><small>
                You will get a notification when the timer stops.
              </small></p>
            }
          </div>
          </div>
          <div className="mb-3 row pr-0">
            <label htmlFor="interval" className="col-8 col-form-label">
              Break Interval
            </label>
            <div className="col-4">
              <select
                className="form-select form-select-sm" 
                aria-label=".form-select-sm example"
                onChange={({ target }) => {
                  if(target.value === "30") {
                    setFv((o) => ({ ...o, workMinute: Number(target.value), workHour: 0  }))  
                  } else {
                    setFv((o) => ({ ...o, workHour: Number(target.value), workMinute: 0 }))
                  }
                }}
              >
                <option value="30" selected={formValue.workMinute === 30}>30 min</option>
                <option value="1" selected={formValue.workHour === 1}>1 h</option>
                <option value="2" selected={formValue.workHour === 2}>2 h</option>
              </select>
            </div>
            <div id="workHelp" className="form-text">
              {console.log(formValue)}
              <p><small>
                You are going to work for {formValue.workHour == 0 ? `${formValue.workMinute} min` : `${formValue.workHour} hour${formValue.workHour > 1 ? 's' : ''}` }
                {' '}before taking a break.
              </small></p>
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="duration" className="col-8 col-form-label">
              Break duration
            </label>
            <div className="col-4">
              <select 
                className="form-select form-select-sm" 
                aria-label=".form-select-sm example"
                onChange={({ target }) =>
                  setFv((o) => ({ ...o, restMinute: Number(target.value) }))
                }
              >
                <option value="1" selected={formValue.restMinute === 1}>1 min</option>
                <option value="10" selected={formValue.restMinute === 10}>10 min</option>
                <option value="15" selected={formValue.restMinute === 15}>15 min</option>
                <option value="20" selected={formValue.restMinute === 20}>20 min</option>
              </select>
            </div>
            <div id="restHelp" className="form-text">
              <p><small>
                Take a break of {formValue.restMinute} minutes. Take it easy!
              </small></p>
            </div>
          </div>

          <button className="form-finish-btn ps-0 mt-3" onClick={handleFinish}>
            <i className="bi bi-arrow-left"></i>{' '}
            Back
          </button>
      </div>
    </div>
  );
};

export default memo(Form);
