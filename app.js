function expenseApp() {
    return {
      description: '',
      amount: '',
      expenses: [],
  
      async addExpense() {
        const response = await fetch('/api/expenses', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            description: this.description,
            amount: parseFloat(this.amount)
          })
        });
        
        if (response.ok) {
          const expense = await response.json();
          this.expenses.push(expense);
          this.description = '';
          this.amount = '';
        }
      },
  
      async deleteExpense(expenseId) {
        const response = await fetch(`/api/expenses/${expenseId}`, {
          method: 'DELETE'
        });
        
        if (response.ok) {
          this.expenses = this.expenses.filter(expense => expense.id !== expenseId);
        }
      }
    };
  }
  