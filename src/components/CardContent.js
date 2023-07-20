import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";


export const WrapContent = ({ title, url, desc, type, thumbnail }) => {
  const downloadPdf = (url) => {
    const aTag = document.createElement("a")
    aTag.href = url
    aTag.setAttribute("download", url.split("/").pop())
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }
  return (
    <Card className="mt-6 w-[512px] min-h-fit relative">
      <CardHeader color="blue-gray" className="relative h-64">
        {
          type == "pdf" || type == "poster" || type == "link" ? <img className="w-full h-full" src={thumbnail} alt="img-blur-shadow" layout="fill" /> : <iframe
            width="100%"
            height="100%"
            src={url}
            title={title}
            layout="fill">
          </iframe>
        }
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        {
          desc &&
          <Typography>
            {desc}
          </Typography>
        }

      </CardBody>
      <CardFooter className="pt-0 bottom-0">
        {
          type == "pdf" ? <Button onClick={() => downloadPdf(url)}>Read More</Button> :
            <Button onClick={() => { type !== "yt" ? window.open(url) : window.open(url.replace(/embed/g, "watch")) }}>Full Width</Button>
        }

      </CardFooter>
    </Card>
  )
}

export const WrapTextContent = ({ title, type, link, body, list }) => {
  return (
    <Card className="mt-6 w-[512px] overflow-x-hidden min-h-fit relative">
      <CardBody className="space-y-2">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        {
          list ? list == "none" ? body.map((data, index) => {
            return (
              <Typography key={index}>
                {data}
              </Typography>
            )
          }) : list == "number" ?
            <ul className="list-decimal h4 font-medium">
              {
                body.map((data, index) => {
                  return (
                    <li key={index}>
                      <Typography>
                        {data}
                      </Typography>

                    </li>
                  )
                })
              }
            </ul>
            : list == "number link" ?
              <ul className="list-decimal h4 font-medium">
                {
                  body.map((data, index) => {
                    let temp = data.split("-")
                    return (
                      <li key={index}>
                        <Typography>
                          {temp[0]}
                          <a className="underline" href={temp[1]} target="_blank">{temp[1]}</a>
                        </Typography>
                      </li>
                    )
                  })
                }
              </ul>
              : ""
            :
            <Typography>
              {body}
            </Typography>
        }
        {
          link &&
          <Typography>
            <a className="underline" href={link} target="_blank">{link}</a>
          </Typography>
        }
      </CardBody>
    </Card>
  )
}


