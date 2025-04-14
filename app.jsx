import { useState } from 'react'
import './index.css'

export default function App() {
  const [income, setIncome] = useState('')
  const [expenses, setExpenses] = useState('')
  const [result, setResult] = useState(null)

  const calculateAffordability = () => {
    const monthlyIncome = parseFloat(income)
    const monthlyExpenses = parseFloat(expenses)
    if (!isNaN(monthlyIncome) && !isNaN(monthlyExpenses)) {
      const savings = monthlyIncome - monthlyExpenses
      setResult(savings)
    } else {
      setResult('Invalid input')
    }
  }

  return (
    <div className="calculator">
      <h1>Affordability Calculator</h1>
      <input
        type="number"
        placeholder="Monthly Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monthly Expenses"
        value={expenses}
        onChange={(e) => setExpenses(e.target.value)}
      />
      <button onClick={calculateAffordability}>Calculate</button>
      {result !== null && (
        <div className="result">
          {typeof result === 'number'
            ? `You can save ₹${result} per month.`
            : result}
        </div>
      )}
    </div>
  )
}
```