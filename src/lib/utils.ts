import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]): string {
  if (inputs.length === 0) return "";
 
  const validInputs = inputs.filter((input): input is ClassValue => {
    if (input === null || input === undefined || input === false) {
      return false;
    }

    if (typeof input === 'string') {
      return input.trim().length > 0;
    }

    return true;
  });

  if (validInputs.length === 0) return "";

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
  const combined = clsx(validInputs);
  
  if (!combined || typeof combined !== 'string') return "";
  
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
    const result = twMerge(combined);

    if (typeof result === 'string' && result.trim().length > 0) {
      return result;
    }

    return combined;
  } catch (error) {
    console.warn('Class name merge operation failed, using fallback:', {
      error: error instanceof Error ? error.message : String(error),
      inputCount: inputs.length,
      validCount: validInputs.length
    });
    return combined;
  }
}