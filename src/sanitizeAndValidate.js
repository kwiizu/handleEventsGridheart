'use strict';
import { body } from 'express-validator';

const sanitizeAndValidate = [
  body('organizationId')
    .isString()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Missing or invalid organizationId'),
  body('organizationName')
    .isString()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Missing or invalid organizationName'),
  body('brokerId')
    .isString()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Missing or invalid brokerId'),
  body('serviceId')
    .isString()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Missing or invalid serviceId'),
  body('brookerServiceId')
    .isString()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Missing or invalid brookerServiceId'),
  body('organizationServiceId')
    .isString()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Missing or invalid organizationServiceId'),
  body('subscriptionId')
    .isString()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Missing or invalid subscriptionId'),
  body('parentId')
    .isString()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Missing or invalid parentId'),
  body('customPropertiesData.contractId').optional().isString().trim().escape(),
  body('triggerEventType')
    .isString()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Missing or invalid triggerEventType'),
];

export default sanitizeAndValidate;
