import { useState } from 'react';

function HealthForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [height, setHeight] = useState('');
  const [sex, setSex] = useState('');

  // New state variables for macro goals
  const [carbGoal, setCarbGoal] = useState('');
  const [fatGoal, setFatGoal] = useState('');
  const [proteinGoal, setProteinGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      age,
      weight,
      weightUnit,
      heightUnit,
      sex,
      ...(heightUnit === 'cm' ? { height } : { feet, inches }),
      macroGoals: { carbGoal, fatGoal, proteinGoal }, // Macro goals
    };
    console.log('Form data submitted in HealthForm:', formData);
    onSubmit(formData);
    alert('Health data submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>

      <label>Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
      </label>
      
      <label>Weight:
        <input 
          type="number" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
          required 
        />
        <select value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
          <option value="kg">kg</option>
          <option value="lbs">lbs</option>
        </select>
      </label>
      
      <label>Height:
        {heightUnit === 'cm' ? (
          <input 
            type="number" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)} 
            required 
          />
        ) : (
          <div style={{ display: 'flex', gap: '5px' }}>
            <input
              type="number"
              placeholder="ft"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="in"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              required
            />
          </div>
        )}
        <select value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
          <option value="cm">cm</option>
          <option value="feet">feet</option>
        </select>
      </label>
      
      <label>Sex:
        <select value={sex} onChange={(e) => setSex(e.target.value)} required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>

      {/* New fields for macro goals */}
      <label>Carbohydrate Goal (g):
        <input type="number" value={carbGoal} onChange={(e) => setCarbGoal(e.target.value)} required />
      </label>

      <label>Fat Goal (g):
        <input type="number" value={fatGoal} onChange={(e) => setFatGoal(e.target.value)} required />
      </label>

      <label>Protein Goal (g):
        <input type="number" value={proteinGoal} onChange={(e) => setProteinGoal(e.target.value)} required />
      </label>
      
      <button type="submit">Save Health Data</button>
    </form>
  );
}

export default HealthForm;
