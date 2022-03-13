import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";

export const Toolbar = () => (
  <GridToolbarContainer>
    {/*
    // @ts-ignore */}
    <GridToolbarColumnsButton color="secondary" />
    {/*
    // @ts-ignore */}
    <GridToolbarDensitySelector color="secondary" />
    {/*
    // @ts-ignore */}
    <GridToolbarFilterButton color="secondary" />
  </GridToolbarContainer>
);
