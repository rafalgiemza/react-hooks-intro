import { LayoutProps } from "../../interfaces/LayoutProps";
import { Grid } from "../styled/Grid";

export function Layout({ children }: LayoutProps) {
  return (
    <Grid>
      {children}
    </Grid>
  )
}
