import {rankWith, refEndsWith} from '@jsonforms/core'
import React from "react";

export const ratingControlTester =
  rankWith(3, refEndsWith('rating'));
