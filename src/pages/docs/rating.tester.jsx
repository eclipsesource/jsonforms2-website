import { rankWith, scopeEndsWith } from '@jsonforms/core'
import React from "react";

export const ratingControlTester =
  rankWith(3, scopeEndsWith('rating'));
