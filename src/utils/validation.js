const REQUIRED_FIELD = 'Field is required!'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nameRegex = /^[a-zA-Zа-яА-Я\s'-]+$/;
const phoneRegex = /^[0-9+]*$/

export const emailValidation = {
    required: REQUIRED_FIELD,
    validate: (str) => {
        if (!emailRegex.test(str)) {
            return 'Invalid imail format'
        }

        return true
    }
}

export const nameValidation = {
    required: REQUIRED_FIELD,
    validate: (str) => {
        if (!nameRegex.test(str)) {
            return 'Invalid characters in the name';
        }

        return true
    }
}

export const phoneValidation = {
    
    validate: (str) => {
        if (str.length === 0) {
            return true
        } else if (!phoneRegex.test(str)) {
            return 'Incorect phone number type';
        }

        return true
    }
}

