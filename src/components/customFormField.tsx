import {
    Control,
    ControllerRenderProps,
    FieldValues,
    FieldPath,
    Path,
  } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { ReactNode } from "react";
import { format } from "date-fns";
  
import {
    FormField,
    FormControl,
    FormDescription,
    FormItem,
    FormMessage,
} from "@/components/ui/form";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"

  
interface Props<T extends FieldValues> {
    name: FieldPath<T>;
    placeholder?: string;
    description?: string;
    control: Control<T>;
}

interface ChildrenProps<T extends FieldValues> extends Props<T> {
    children: (field: ControllerRenderProps<T, Path<T>>) => ReactNode;
}

export function CustomFormField<T extends FieldValues>(
    props: Readonly<ChildrenProps<T>>
  ) {
    const { name, description, control, children } = props;
  
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>{children(field)}</FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    );
}

export function CustomFormDatePicker<T extends FieldValues>(
    props: Readonly<Props<T>>
  ) {
    const { name, placeholder, description, control } = props;
  
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "iii, dd MMM yyyy")
                    ) : (
                      <span>{placeholder}</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                            data-testid="calendar"
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => {
                            field.onChange(date);
                            }}
                            disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                            }
                            captionLayout="dropdown-buttons"
                            fromDate={new Date("1900-01-01")}
                            toDate={new Date()}
                            initialFocus
                    />
              </PopoverContent>
            </Popover>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    );
}