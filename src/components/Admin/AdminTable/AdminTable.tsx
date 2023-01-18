import {
  Skeleton,
  Table,
  TableCell,
  TableRow,
  Box,
  TableBody,
  TableHead,
  Container,
  Card,
  Stack,
  Alert,
} from "@mui/material";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import Pages from "../../ui/Pagination";
import { State } from "../../../reducers/rootReducer";

interface baseProps {
  children: JSX.Element | JSX.Element[];
}

interface tableFilterContainerProps extends baseProps {
  isLoading: boolean;
}

interface adminTableProps extends baseProps {
  columns: number;
  rows: number;
  hasData: boolean;
  noDataMessage: string;
}

export const TableFilterContainer: FC<tableFilterContainerProps> = ({
  children,
  isLoading,
}) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        marginLeft: 0,
        justifyContent: "space-between",
        padding: "20px",
        position: "relative",
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "white",
            zIndex: 99999,
            opacity: 0.5,
          }}
        ></Box>
      ) : (
        <></>
      )}
      {children}
    </Container>
  );
};

export const AdminTableFilters: FC<baseProps> = ({ children }) => {
  return (
    <>{ children }</>
  )
}

export const AdminTable: FC<adminTableProps> = ({
  rows,
  columns,
  children,
  hasData,
  noDataMessage,
}) => {
  const { inProgress } = useSelector((state: State) => state.request);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (inProgress) {
      setIsLoading(true);
    } else {
      const t = setTimeout(() => {
        setIsLoading(false);
        clearTimeout(t);
      }, 1200);
    }
  }, [inProgress]);

  const skeletonArray = Array(rows).fill(Array(columns).fill(""));

  return (
    <Card>
      <Box maxWidth="lg" sx={{ width: '1200px'}}>
        <TableFilterContainer isLoading={isLoading}>
          {(children as any[])[0]}
        </TableFilterContainer>
        {isLoading ? (
          <>
            <Table>
              <TableHead>
                <TableRow>
                  {skeletonArray[0].map((item: any, index: number) => (
                    <TableCell sx={{ height: "64px" }} key={`${index}_th`}>
                      <Skeleton />
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {skeletonArray.map((item, index) => (
                  <TableRow key={`${index}_tr`}>
                    {item.map((item: any, index: number) => (
                      <TableCell sx={{ height: "80px" }} key={`${index}_td`}>
                        <Skeleton />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "106.5px",
              }}
            >
              <Skeleton width={210} height={27} />
            </Box>
          </>
        ) : (
          <>
            {!hasData ? (
              <Container>
                <Stack sx={{ width: "100%" }} spacing={1}>
                  <Alert severity="info">{noDataMessage}</Alert>
                </Stack>
              </Container>
            ) : (
              <>
                {(children as any[])[1]}
              </>
            )}
          </>
        )}
        <Pages isLoading={isLoading}/>
      </Box>
    </Card>
  );
};
