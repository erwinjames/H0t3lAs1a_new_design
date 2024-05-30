$(document).ready(function () {
$('#kt_create_reservation_form').formValidation({
    framework: 'bootstrap',
    icon: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        account_name: {
            validators: {
                notEmpty: {
                    message: 'The account name is required'
                }
            }
        },
        p_name: {
            validators: {
                notEmpty: {
                    message: 'The personal name is required'
                }
            }
        },
        address: {
            validators: {
                notEmpty: {
                    message: 'The address is required'
                }
            }
        },
        tel_num: {
            validators: {
                notEmpty: {
                    message: 'The telephone number is required'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'The email address is required'
                },
                emailAddress: {
                    message: 'The input is not a valid email address'
                }
            }
        },
        CheckInOut: {
            validators: {
                notEmpty: {
                    message: 'The check-in and check-out dates are required'
                }
            }
        },
        card_name: {
            validators: {
                notEmpty: {
                    message: 'The cardholder name is required'
                }
            }
        },
        card_number: {
            validators: {
                notEmpty: {
                    message: 'The card number is required'
                }
            }
        },
        card_expiry_month: {
            validators: {
                notEmpty: {
                    message: 'The expiry month is required'
                }
            }
        },
        card_expiry_year: {
            validators: {
                notEmpty: {
                    message: 'The expiry year is required'
                }
            }
        },
        card_cvv: {
            validators: {
                notEmpty: {
                    message: 'The CVV is required'
                }
            }
        },
        num_of_adults: {
            validators: {
                notEmpty: {
                    message: 'Please specify the number of adults'
                },
                integer: {
                    message: 'The value must be a number'
                },
                greaterThan: {
                    value: 0,
                    message: 'The value must be greater than 0'
                }
            }
        },
        num_of_child: {
            validators: {
                notEmpty: {
                    message: 'Please specify the number of children'
                },
                integer: {
                    message: 'The value must be a number'
                },
                greaterThanOrEqual: {
                    value: 0,
                    message: 'The value must be greater than or equal to 0'
                }
            }
        },
        num_rooms: {
            validators: {
                notEmpty: {
                    message: 'Please specify the number of rooms'
                },
                integer: {
                    message: 'The value must be a number'
                },
                greaterThan: {
                    value: 0,
                    message: 'The value must be greater than 0'
                }
            }
        },
        numGuest: {
            validators: {
                notEmpty: {
                    message: 'Please specify the number of guests'
                },
                integer: {
                    message: 'The value must be a number'
                },
                greaterThan: {
                    value: 0,
                    message: 'The value must be greater than 0'
                }
            }
        },
        preBedType: {
            validators: {
                notEmpty: {
                    message: 'The preferred bed type is required'
                }
            }
        },
        extrabedselect: {
            validators: {
                notEmpty: {
                    message: 'Please specify if you need an extra bed'
                }
            }
        },
        flightAndArrival: {
            validators: {
                notEmpty: {
                    message: 'Flight and arrival information is required'
                }
            }
            }
        }
    });
});
