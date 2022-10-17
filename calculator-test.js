describe('calculateMonthlyPayments tests', function() {

  it('should calculate the monthly rate properly', function() {
    const values = { 
      amount: 50000, 
      years: 20, 
      rate: 3
    }
    expect(calculateMonthlyPayment(values)).toEqual('277.30'); 
  })

  it('should calculate a high amount with a low rate', function() {
    const values = { 
      amount: 55000000, 
      years: 10, 
      rate: 2
    }
    expect(calculateMonthlyPayment(values)).toEqual('506074.00'); 
  })

  it('should calculate a high rate with a low amount', function() {
    const values = { 
      amount: 100000, 
      years: 10, 
      rate: 90
    }
    expect(calculateMonthlyPayment(values)).toEqual('7501.28'); 
  })


})
