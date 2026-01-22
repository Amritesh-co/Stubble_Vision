import { List, ListItem, Link } from '@chakra-ui/react';

export default function ReferenceList() {
  return (
    <List spacing={3} fontSize="sm">
      <ListItem>
        <Link href="https://firms.modaps.eosdis.nasa.gov/" isExternal>
          NASA FIRMS Documentation
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://sentinel.esa.int/web/sentinel/user-guides/sentinel-2-msi" isExternal>
          ESA Sentinel-2 User Guide
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.usgs.gov/programs/fire" isExternal>
          USGS Burn Severity Mapping
        </Link>
      </ListItem>
      <ListItem>
        Key & Benson (2006). Landscape Assessment: Ground Measure of Severity.
      </ListItem>
      <ListItem>
        Miller & Thode (2007). Quantifying burn severity.
      </ListItem>
    </List>
  );
}
