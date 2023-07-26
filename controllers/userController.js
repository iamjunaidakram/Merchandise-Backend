const Register = (req, res) => {
  try {
    console.log(req.body);
    res.json({ message: 'Hello, API!' });
  } catch (error) {
    console.log(error);
  }
};

const login = (req, res) => {
    try {
      console.log(req.body);
      res.json({ message: '' });
    } catch (error) {
      console.log(error);
    }
  };

const getUser = (req, res) => {
try {
    console.log(req.body);
    res.json({ userId: '123', userName: 'junaid' });
} catch (error) {
    console.log(error);
}
};


module.exports = { Register, login , getUser };
