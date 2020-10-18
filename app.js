const express = require('express');
const ExpressError = require('./expressError');
const {mean, median, mode} = require('./helpers');

app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/mean', (req, res, next) => {
    try {
        if (req.query.nums) {
            let nums = req.query.nums.split(",");
            if (nums.map(Number).every(e => e)) {
                res.json({
                    response: {
                        operation: "mean",
                        value: mean(nums.map(Number))
                    }
                });
            } else {
                let notNumbers = nums.filter(e => !Number(e));
                throw new ExpressError(`${notNumbers[0]} is not a number`, 400)
            }
        } else {
            throw new ExpressError("nums argument required in query string", 400)
        }
    } catch (e) {
        return next(e);
    }
});

app.get('/median', (req, res) => {
    try {
        if (req.query.nums) {
            let nums = req.query.nums.split(",");
            if (nums.map(Number).every(e => e)) {
                res.json({
                    response: {
                        operation: "mean",
                        value: median(nums.map(Number))
                    }
                });
            } else {
                let notNumbers = nums.filter(e => !Number(e));
                throw new ExpressError(`${notNumbers[0]} is not a number`, 400)
            }
        } else {
            throw new ExpressError("nums argument required in query string", 400)
        }
    } catch (e) {
        return next(e);
    }
});

app.get('/mode', (req, res) => {
    try {
        if (req.query.nums) {
            let nums = req.query.nums.split(",");
            if (nums.map(Number).every(e => e)) {
                res.json({
                    response: {
                        operation: "mean",
                        value: mode(nums.map(Number))
                    }
                });
            } else {
                let notNumbers = nums.filter(e => !Number(e));
                throw new ExpressError(`${notNumbers[0]} is not a number`, 400)
            }
        } else {
            throw new ExpressError("nums argument required in query string", 400)
        }
    } catch (e) {
        return next(e);
    }
});

app.use((error, req, res, next) => {
    console.log(error.message);
    res.json(
        {
            error: {
                msg: error.message,
                status_code: error.status
            }
        }
    );
})

app.listen(3000, () => {
    console.log('App on port 3000');

})